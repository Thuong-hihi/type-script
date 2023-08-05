import React from 'react'

const Header = ({ data }) => {
    // console.log(data);
    return (
        <header>
            <div>
                <img src="" alt="" />
            </div>
            <nav>
                <ul>

                    {data.map((menu, index) => {
                        return (
                            <li key={index + 1}><a href={menu.path}>{menu.name}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header