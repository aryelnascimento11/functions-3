import Note from "./note"


export default function Banner() {
    return (
        <>
            <section className="w-screen h-screen bg-black flex py-4 justify-center">
                <div className="border border-white w-96 h-96 shadow-lg p-4  shadow-green-700 rounded-lg">
                    <h1 className="text-3xl text-center py-4  text-white">Anotações</h1>
                    <input className="rounded-lg  text-2xl w-64" type="text" />
                    <button className="text-white rounded   border hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition  ">adicionar</button>
                    <Note
                        title="dddd"
                    />
                    <Note
                        title="oioioio"
                    />
                    <Note
                        title="aaaaa"
                    />
                </div>
            </section>

        </>
    )
}