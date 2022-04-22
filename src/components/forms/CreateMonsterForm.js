import axios from "axios";
import React, {useEffect, useState} from "react";

const fetchUsers = () => {
    return axios.get(`http://localhost:8080/users`)
}

const CreateMonsterForm = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        fetchUsers().then((response) => setUsers(response.data))
    }, [])

    if (!users) return null;

    return <div>
        <h1>Create monster</h1>
        <form>
            <p>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name"/>

            </p>
            <p>
                <label htmlFor="health">HPs: </label>
                <input type="number" id="health" min="0" max="99"/>

            </p>
            <p>
                <label htmlFor="hit">ATK: </label>
                <input type="number" id="hit" min="0" max="99"/>
            </p>
            <p>
                <label htmlFor="creator">Creator: </label>
                <select>
                    <option value={null}>
                        --- Select an option ---
                    </option>
                    {users.map((u) => {
                        return (
                            <option value={u.id}
                                    key={u.id}>
                                {u.name}
                            </option>
                        )
                    })}
                </select>
            </p>
            <button>Create</button>
        </form>
    </div>
}

export default CreateMonsterForm;