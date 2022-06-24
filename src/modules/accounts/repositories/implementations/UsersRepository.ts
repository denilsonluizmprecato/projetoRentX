import { Repository } from "typeorm";
import { dataSource } from "../../../../database";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = dataSource.getRepository(User);
    }

    async create({name, username, email, driver_license, password}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            driver_license,
            password,
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User>{
        const user = await this.repository.findOne({ where: { email: email } });

        return user;
    };

    async findById(id: string): Promise<User>{
        const user = await this.repository.findOne({ where: { id: id } });

        return user;
    }
    
}

export { UsersRepository }