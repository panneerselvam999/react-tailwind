import React from 'react'
import menu from "../../JsonData/menu.json"

const Menu = () => {
    return (
        <section className=''>
            <ul>

                {
                    menu.menuData.map(data => (
                        <li key={data.id}>
                            {data.name}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Menu