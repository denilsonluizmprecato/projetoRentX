import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository) {};

    async execute({name, username, email, driver_license, password}: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User Already Exists");
        }
        
        const passwordHash = await hash(password, 8);
        
        await this.usersRepository.create({
            name,
            username,
            email,
            driver_license,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase }