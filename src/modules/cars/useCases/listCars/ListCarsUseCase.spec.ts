import { CarsRepositoryInMemory } from "../../../../../src/modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase"

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    })

    it("Should be able to list all available cars", async () => {

        const car = await carsRepositoryInMemory.create({
            name: "carro 1",
            description: "descricao do carro 1",
            daily_rate: 1100,
            license_plate: "f2ds-4568",
            fine_amount: 13,
            brand: "marca carro 1",
            category_id: "id categoria",
        })

        const cars = await listCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("Should be able to list all available cars by brand", async () => {

        const car = await carsRepositoryInMemory.create({
            name: "carro 1",
            description: "descricao do carro 1",
            daily_rate: 1100,
            license_plate: "f2ds-4568",
            fine_amount: 13,
            brand: "marca carro 1",
            category_id: "id categoria",
        })

        const cars = await listCarsUseCase.execute({
            brand: "marca carro 1",
        });

        expect(cars).toEqual([car]);
    });

    it("Should be able to list all available cars by name", async () => {

        const car = await carsRepositoryInMemory.create({
            name: "carro 1",
            description: "descricao do carro 1",
            daily_rate: 1100,
            license_plate: "f2ds-4568",
            fine_amount: 13,
            brand: "marca carro 1",
            category_id: "id categoria",
        })

        const cars = await listCarsUseCase.execute({
            name: "carro 1",
        });

        expect(cars).toEqual([car]);
    });

})