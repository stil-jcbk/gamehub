type SectionProps = {
    name: string;
    children?: any;
}

export default function Section(props: SectionProps){
    return(
        <div id={"section-" + props.name} className="section">
            {props.children}
        </div>
    )
}