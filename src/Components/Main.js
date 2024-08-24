const name = 'Supun Chathuranga'
const position = 'Mobile developer'
const myobj = {
    name:`${name}`,
    position:`${position}`,
    city: 'Kurungala',
};

function Main(props){
    const {city} = myobj;
    return(
        <div>
            This is the main component

            <ul>
                <li>{myobj.name}</li>
                <li>{myobj.position}</li>
                <li>{city}</li>
                <li>windoUbuntuws</li>
                <li>Mac OS</li>
            </ul>
        </div>
    );
}

export default Main;