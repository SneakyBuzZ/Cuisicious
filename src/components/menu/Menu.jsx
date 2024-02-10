
function Menu() {
    return (
        <>
            <div className="services">
                <div className="picbox">
                    <div className="box1">
                        <img src="/public/food2.png" alt="" />
                        <div className="box3">
                            <h1 className="text-amber-400">Fluffy Pancakes</h1>
                            <a href="#">
                                <p className="text-stone-600">Pancakes, with their golden-brown allure and fluffy texture, are a timeless breakfast classic loved by people of all ages</p>
                            </a>
                            <div className="hr1">
                                {/* <hr /> */}
                            </div>
                            <a className="text-gray-400" href="#" id="a1">
                                BY KAUSHIK KATIKALA
                            </a>
                        </div>
                    </div>
                    <div className="box2">
                        <img src="/public/biryani.png" alt="" />
                        <div className="box4">
                            <h1 className="text-amber-400">Chicken Dum Biryani</h1>
                            <a href="#">
                                <p className="text-stone-600">Chicken dum biryani, a tantalizing culinary masterpiece,succulent chicken, and aromatic rice and slow-cooked to perfection</p>
                            </a>
                            <div className="hr2">
                                {/* <hr /> */}
                            </div>
                            <a className="text-gray-400" href="#" id="a2">BY SNEAKYBUZZ</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
