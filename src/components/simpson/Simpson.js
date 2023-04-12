import "./Simpson.css";
export default function Simpson({simpson: {name, surname, age, info, photo}}) {
    return (
        <div className={"div-main"}>
            <img src={photo} alt={"simps"}></img>
            <ul className={"simpson-box"}>
                <li>{name}</li>
                <li>{surname}</li>
                <li>{age}</li>
                <li>{info}</li>
            </ul>

        </div>
    );
}