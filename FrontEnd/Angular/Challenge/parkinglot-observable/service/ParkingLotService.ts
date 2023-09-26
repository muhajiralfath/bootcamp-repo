import {Vehicle} from "../entity/Vehicle";
import {Observable} from "rxjs";


interface ParkingArea {
    createPark(): Observable<string>;
    park(vehicle: Vehicle): Observable<string>;
    leave(noPolVehicle: string): Observable<string>;
    check(): Observable<ParkingInfo>;
}

interface ParkingInfo {
    capacity: number;
    emptySlots: number;
    parkedVehicles: Vehicle[];
}


const parkingLot = (capacity: number): ParkingArea => {
    let parkingArea: Array<Vehicle | null> = new Array(capacity).fill(null);

    const createPark = (): Observable<string> => {
        return new Observable((subscriber) => {
            setTimeout(() => {
                subscriber.next(`parking lot dengan kapasitas ${capacity} telah dibuat`);
                subscriber.complete();
            }, 5000);
        });
    };

    const park = (vehicle: Vehicle): Observable<string> => {
        return new Observable((subscriber) => {
            if (parkingArea.some((slot) => slot && slot.nopol === vehicle.nopol)) {
                subscriber.error(
                    `Kendaraan dengan nopol ${vehicle.nopol} sudah ada dalam daftar parkir. Tidak dapat mendaftar lagi`
                );
            } else {
                const emptySlot = parkingArea.indexOf(null);
                if (emptySlot === -1) {
                    subscriber.error(
                        "Lahan parkir penuh, mobil tidak dapat masuk ke area parkir"
                    );
                } else if (vehicle.nopol && vehicle.pemilik) {
                    setTimeout(() => {
                        parkingArea[emptySlot] = vehicle;
                        subscriber.next(
                            `Kendaraan dengan nopol ${vehicle.nopol} berhasil masuk ke area parkir`
                        );
                        subscriber.complete();
                    }, 3000);
                }
            }
        });
    };

    const leave = (noPolVehicle: string): Observable<string> => {
        return new Observable((subscriber) => {
            const parkingVhcIndex = parkingArea.findIndex(
                (v) => v && v.nopol === noPolVehicle
            );
            if (parkingVhcIndex !== -1) {
                setTimeout(() => {
                    parkingArea.splice(parkingVhcIndex, 1);
                    subscriber.next(
                        `Kendaraan dengan nopol ${noPolVehicle} keluar dari area parkir`
                    );
                    subscriber.complete();
                }, 1500);
            } else {
                subscriber.error(
                    `Kendaraan dengan nopol ${noPolVehicle} tidak terdaftar ! checkout gagal`
                );
            }
        });
    };

    const check = (): Observable<ParkingInfo> => {
        return new Observable((subscriber) => {
            setTimeout(() => {
                setTimeout(() => {
                    const parkedVehicles: Vehicle[] = parkingArea.filter(
                        (v) => v !== null
                    ) as Vehicle[];
                    const emptySlots = capacity - parkedVehicles.length;
                    const parkingInfo: ParkingInfo = {
                        capacity: capacity,
                        emptySlots: emptySlots,
                        parkedVehicles: parkedVehicles,
                    };
                    subscriber.next(parkingInfo);
                    subscriber.complete();
                }, 500);
            });
        });
    };

    return { createPark, park, leave, check };
};


export {
        parkingLot, ParkingArea, ParkingInfo
}