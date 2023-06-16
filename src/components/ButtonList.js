

const ButtonList = () => {

    const Lists = ['All', 'News', 'Gaming', 'Music', 'Live', 'Reptiles', 'Comedy', 'Scene', 'Thrillers', 'Gadgets', 'Computer Science', 'Cars']

    return (
        <div className="ml-4">
            {/* {Lists.map((item)=>(
                <>
                <button key={item} className="bg-gray-200 px-3 py-2 rounded-md mx-2">{item}</button>
                </>
            ))} */}
            <button className="bg-gray-900 text-white px-3 py-2 rounded-md mx-2">All</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">News</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">Gaming</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">Music</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">Live</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">Reptiles</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">Comedy</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">Scene</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">Thrillers</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">Gadgets</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">Computer science</button>
            <button className="bg-gray-200 px-3 py-2 rounded-md mx-2">Cars</button>

        </div>
    )
}

export default ButtonList;