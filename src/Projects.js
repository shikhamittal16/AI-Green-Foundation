import Programs from "./Programs";

export default function Projects() {
    const programs = [
        {
            image: "fa fa-globe",
            alt: "Environmental Protection and Awareness",
            programTitle: "Environmental Protection and Awareness",
            programDesc: "Advance knowledge and skills related to environmental sustainability.",
            programBody: "1.Research on eco-friendly waste management technologies, including composting systems to convert organic waste into compost.<br/>2.Facilitated the creation of composting units across villages, empowering self-help groups and kitchen garden owners.</br>3.Organized recycling programs with advanced sorting technologies and established a local Material Recovery Facility"
        },
        {
            image: "fa fa-tree",
            alt: "Social Forestry",
            programTitle: "Social Forestry",
            programDesc: "Increase green cover and promote sustainable land use.",
            programBody: "1.Developed nurseries and kitchen gardens for community-driven plantations.<br/>2.Actively conducted plantation drives and awareness programs across Lower Dibang Valley, encouraging community participation.<br/> 3.AIGF has planted over 10,000 trees in collaboration with local communities, contributing to reforestation efforts and reducing air pollution."
        },
        {
            image: "fa fa-trash-alt",
            programTitle:"Green Roing Initiative" ,
            programDesc:"Focused on waste collection, segregation, and recycling." ,
            programBody:
              "Launch: Focused on waste collection, segregation, and recycling.<br/> Collaborations: Worked alongside DUDA under guidance from the Lower Dibang Valley District Administration.<br/>Impact: Praised for efficiency and replicated in other districts, setting a model for solid waste management."
            ,
        },
        {
            image: "fa fa-recycle",
            programTitle:"Plastic Waste Management" ,
            programDesc:"" ,
            programBody:
              "AIGF developed a model to reduce the negative impact of plastic waste, aligning with the Swachh Bharat Mission. The program focuses on recycling, segregation, and creating economic sustainability through plastic waste management."
            ,
        },
        {
            image: "fa fa-dumpster",
            programTitle:"Solid Waste Management" ,
            programDesc:"Focused on waste collection, segregation, and recycling." ,
            programBody:
              "1.Promoted decentralized waste management through home and community composting.<br/>2.Reached 90% waste segregation in target areas by creating residential committees and fostering local ownership.<br/>3.Engaged local communities by raising awareness on the importance of recycling and sustainable waste disposal practices"
            ,
        },
    ];
    return (
        <>
            <section class="hero-section" style={{ backgroundSize: "cover", padding: "80px 0", textAlign: "center", color: "black" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Our Programs and Initiatives</h1>
                <p style={{ fontSize: "1.5rem", marginTop: "20px" }}>Creating Impact through Environmental Conservation and Community Welfare</p>
            </section>

            <section className="programs-section" style={{ padding: '50px 0' }}>
                <div className="container">
                    <div className="row">
                        {programs.map((program, index) => (
                            <Programs
                                key={index}
                                programTitle={program.programTitle}
                                programDesc={program.programDesc}
                                programBody={program.programBody}
                                image={program.image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}