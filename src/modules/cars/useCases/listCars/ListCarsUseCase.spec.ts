import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase"

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {

    beforeEach(() => {
        carsRepository = new CarsRepository();
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    })

    it("Should be able to list all available cars", async () => {
        await listCarsUseCase.execute();
    })
})