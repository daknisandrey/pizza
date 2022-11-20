import React, { FC, useState } from 'react'

const Categories: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {/* eslint-disable-next-line react/jsx-key */}
                {categories.map((value, i) => (<li className={activeIndex === i ? 'active' : ''} onClick={() => setActiveIndex(i)}>
                    {value}
                </li>))}

            </ul>
        </div>
    )
}

export default Categories
