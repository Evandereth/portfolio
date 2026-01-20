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
            ath: "$5M",
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
        <div className=" w-full flex flex-col gap-5 mt-3 md:flex-row md:flex-wrap md:justify-start items-center">
            
            {
                experience.map((exp)=>(
                    
                    <div key={exp.id} className="w-full lg:w-full xl:w-110 bg-white/80 h-100 p-5 rounded-2xl">

                        <div  className="flex flex-row justify-between item-center py-3 border-b">
                            <label className="w-[50%]">
                                <h1 className="name font-bold text-lg">
                                    {exp.name}
                                </h1>
                                <p className="font-extralight text-gray-500 text-sm">{exp.title} <span className="font-semibold text-[.9em]">- 🔗{exp.chain}</span></p>
                            </label>

                            <div className="bg-gray-100 w-[48%] h-10 px-4 rounded-xl flex justify-center items-center gap-1 cursor-pointer">
                                <p className="text-sm font-extralight">ATH -</p>
                                <h1 className="text-sm font-extralight flex justify-center items-center gap-1"><span className="font-bold text-lg">{exp.ath}</span> mcap</h1>
                            </div>

                        </div>

                        <div>
                            <ul className="list-disc flex flex-col gap-3 p-3">
                                {
                                    exp.achievements.map((list)=>(

                                        <li key={list} className="text-sm"> 
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






           