import {concatMap, Observable, of} from "rxjs";
import { tap } from "rxjs/operators";
import {Vehicle} from "./entity/Vehicle";
import {parkingLot} from "./service/ParkingLotService";

const runParkingLot = () => {
    const enigmaPark = parkingLot(5);

    enigmaPark.createPark().pipe(
        tap(createParkingArea => console.log(createParkingArea)),
        concatMap(createParkingArea => {
            const vehicles = [
                new Vehicle("AB1234", "PARJO"),
                new Vehicle("DB1234", "DIA"),
            ];

            return of(...vehicles).pipe(
                concatMap(vehicle => enigmaPark.park(vehicle))
            );
        }),
        tap(parkResult => console.log(parkResult)),
        concatMap(() => enigmaPark.check()),
        tap(parkingLotInfo => {
            console.log("info lahan parkir");
            console.log(parkingLotInfo);
        }),
        concatMap(() => enigmaPark.leave("AB1234")),
        tap(leaveResult => console.log(leaveResult)),
        concatMap(() => {
            const newVhcToPark = new Vehicle("AA123", "Ibnu");
            return enigmaPark.park(newVhcToPark);
        }),
        tap(newVehicleResult => console.log(newVehicleResult)),
        concatMap(() => enigmaPark.check())
    ).subscribe(
        updatedParkingLotInfo => {
            console.log("Info Lahan parkir");
            console.log(updatedParkingLotInfo);
        },
        error => console.log(error)
    );
};

runParkingLot();

