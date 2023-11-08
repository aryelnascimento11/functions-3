"use client"


export default function Banner() {

    return (
        <>
            <section className="w-screen h-screen  bg-[url('https://media.tenor.com/egxm_ajg8hgAAAAC/goku.gif')] bg-cover bg-black flex py-4 justify-center">
                
                   
                <div className="w-[30%]  min-w-[500px]  sm:min-w[100px] sm:h-[70vh] md:h-fit rounded-lg  border border-white shadow-lg  shadow-green-700mt-10 p-4">
                    <h1 className="text-3xl text-center py-4  text-white">Anotações</h1>
                    <input className="flex justify-center p-1 text-black border rounded-lg text-2xl  " type="text" />
                    <button className=" border-white border-4 text center hover:border-blue-500 cursor-pointer bg-black text-green-500 rounded hover:bg-green-500 hover:text-black hover:scale-110 h-7  w-16">oioioi</button>
                </div>
            </section>
        </>
    )
}