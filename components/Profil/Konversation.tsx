import ButtonMd from "../Buttons/ButtonMd";

function Konversation() {
    return(
        <div>
            <div className='flex flex-col gap-4 pt-10 pr-2 md:pr-60 w-full'>
                <button className='shadow-sm text-sm flex items-center gap-1 justify-center h-[52px] w-[250px] border rounded-lg border-1'><img src='/home-muted.png' alt='A house' />Min profil \ Ansökningar</button>
                <h4>Här visas de meddelanden du svarat på. Vill du se meddelandeförfrågningar gå till Ansökningar och klicka dig vidare därifrån.</h4>
                <div className="border rounded-md border-indigo-900 flex p-4 justify-between items-baseline w-full">
                    <div className="flex gap-6">
                        <div>
                            <img className="rounded-full" src="/adam-chatt.png" alt="Profilbild" />
                        </div>
                        <div>
                            <h3 className="text-xl pb-2">Adam Thordsson</h3>
                            <p className="text-lg pb-2 text-gray-500">Hej! Jag heter Adam och jag skulle g... • 2 tim</p>
                        </div>
                    </div>
                </div>
                <div className="border rounded-md border-indigo-900 flex p-4 justify-between items-baseline w-full">
                    <div className="flex gap-6">
                        <div>
                            <img className="rounded-full" src="/gerd-chatt.png" alt="Profilbild" />
                        </div>
                        <div>
                            <h3 className="text-xl pb-2">Gerd Stark</h3>
                            <p className="text-lg pb-2 text-gray-500">Du: Hej Gerd tyvärr stämmer det inte... • 6 tim</p>
                        </div>
                    </div>
                </div>
                <div className="border rounded-md border-indigo-900 flex p-4 justify-between items-baseline w-full">
                    <div className="flex gap-6">
                        <div>
                            <img className="rounded-full" src="/nicole-chatt.png" alt="Profilbild" />
                        </div>
                        <div>
                            <h3 className="text-xl pb-2">Nicole Damién</h3>
                            <p className="text-lg pb-2 text-gray-500">Du: Hej Nicole vad trevligt! Jag har t... • 2 dag</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Konversation;