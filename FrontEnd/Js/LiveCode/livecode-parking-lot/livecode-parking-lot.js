class Vehicle {
  constructor(nopol, pemilik) {
    this.nopol = nopol;
    this.pemilik = pemilik;
  }
}

const parkingLot = (capacity) => {
  let parkingArea = new Array(capacity).fill(null);

  const createPark = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`parking lot dengan kapasitas ${capacity} telah dibuat`);
      }, 5000);
    });
  };

  const park = (vehicle) => {
    return new Promise((resolve, reject) => {
      if (parkingArea.some((slot) => slot && slot.nopol === vehicle.nopol)) {
        reject(
          `Kendaraan dengan nopol ${vehicle.nopol} sudah ada dalam daftar parkir. Tidak dapat mendaftar lagi`
        );
      } else {
        const empetySlot = parkingArea.indexOf(null);
        if (empetySlot === -1) {
          reject("Lahan parkir penuh, mobil tidak dapat masuk ke area parkir");
        } else if (vehicle.nopol && vehicle.pemilik) {
          setTimeout(() => {
            parkingArea.push(vehicle);
            resolve(
              `Kendaraan dengan nopol ${vehicle.nopol}   berhasil masuk ke area parkir`
            );
          }, 3000);
        }
      }
    });
  };

  const leave = (noPolVehicel) => {
    return new Promise((resolve, reject) => {
      const parkingVhcIndex = parkingArea.findIndex(
        (v) => v && v.nopol === noPolVehicel
      );
      if (parkingVhcIndex !== -1) {
        setTimeout(() => {
          parkingArea.splice(parkingVhcIndex, 1);
          resolve(
            `Kendaraan dengan nopol ${noPolVehicel} keluar dari area parkir`
          );
        }, 1500);
      } else {
        reject(
          `Kendaraan dengan nopol ${noPolVehicel} tidak terdaftar ! checkout gagal`
        );
      }
    });
  };

  const check = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setTimeout(() => {
          const parkedVehicles = parkingArea.filter((v) => v !== null);
          const empetySlot = capacity - parkedVehicles.length;
          const parkingInfo = {
            capacity: capacity,
            emptySlots: empetySlot,
            parkedVehicles: parkedVehicles,
          };
          resolve(parkingInfo);
        }, 500);
      });
    });
  };
  return { createPark, park, leave, check };
};

const runParkingLot = async () => {
  const enigmaPark = parkingLot(5);

  try {
    const createParkingArea = await enigmaPark.createPark();
    console.log(createParkingArea);
    const vehicles = [
      new Vehicle("AB1234", "PARJO"),
      new Vehicle("DB1234", "DIA"),
    ];

    for (const vehicle of vehicles) {
      const parkResult = await enigmaPark.park(vehicle);
      console.log(parkResult);
    }

    const parkingLotInfo = await enigmaPark.check();
    console.log("info lahan parkir");
    console.log(parkingLotInfo);

    const leaveResult = await enigmaPark.leave("AB1234");
    console.log(leaveResult);

    const newVhcToPark = await enigmaPark.park(new Vehicle("AA123", "Ibnu"));
    console.log(newVhcToPark);

    const updatedParkingLotInfo = await enigmaPark.check();
    console.log("Info Lahan parkir");
    console.log(updatedParkingLotInfo);
  } catch (error) {
    console.log(error);
  }
};

runParkingLot();
