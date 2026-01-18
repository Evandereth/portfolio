import { GoDotFill } from "react-icons/go"
export default function Experience(){

    const experience = [
        {
            id:1,
            name: "LIZA AI | $LIZA",
            title: "Liza Scout",
            chain: "ETH - Utility",
            ath: "$20M",
            achievements:["Drove Organic audience growth and visibility by planning and executing KOL campaigns that increased engagement rates by 500% across X and Telegram.", "Collaborated directly with Founder and marketing team to translate the utility narrative that resonated with retail traders.", "Built and maintained long-term KOL relationships with the project, reducing oboarding friction and improving campaign execution and consistent voice."]
        },{
            id:2,
            name: "CAFE | $CAFE",
            title: "A. KOL Mngr",
            chain: "SOL - Meme",
            ath: "$10M",
            achievements:["Sourced, Vetted and activated top tier KOLs(ETH & SOL), contributing to a measurable increase in awareness, community growth and the narrative traction.", "Contributed to end-to-end KOL campaign that boosted content reach, impressions and sustained discussion through Launch and post-launch phase.", "Supported trading momentum by cordinationg campaign that aligned with increased volume, chart activity and consistent interaction on CT."]
        },{
            id:3,
            name: "Velocis AI | $VECAI",
            title: "KOL Manager",
            chain: "ETH - Utility",
            ath: "$150K",
            achievements:["Sourced, Vetted and activated top tier KOLs(ETH-based), contributing to a measurable increase in awareness, community growth and the narrative traction.", "Focused on orgainic KOL campaign during volatile market condition to main visibility, relevance and engagement."]
        }
    ]
    return(
        <>
        <div className="flex flex-col gap-3 mt-3">
            
            {
                experience.map((exp)=>(
                    
                    <div key={exp.id} className="bg-white h-100 p-3 rounded-2xl ">

                        <div  className="flex flex-row justify-between item-center py-3 border-b">
                            <label className="w-[50%]">
                                <h1 className="font-bold text-xl">
                                    {exp.name}
                                </h1>
                                <p className="font-extralight text-gray-500 text-sm">{exp.title} <span className="font-semibold">- 🔗{exp.chain}</span></p>
                            </label>
                            <div className="bg-gray-100 px-5 py-1 rounded-xl flex justify-center items-center gap-1 cursor-pointer">
                                <p className="text-sm font-extralight">ATH -</p>
                                <h1 className="text-sm font-extralight flex justify-center items-center gap-1"><span className="font-bold text-xl">{exp.ath}</span> mcap</h1>
                            </div> 
                        </div>

                        <div>
                            <ul>
                                {
                                    exp.achievements.map((list)=>(

                                        <li key={list} className="flex flex-row justify-start items-start gap-3 my-2"> <span className="font-bolder text-xl">-</span>
                                        {list}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                ))
            }
        </div>
        </>
    )
}






           