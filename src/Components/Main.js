// const name = 'Supun Chathuranga'
// const position = 'Mobile developer'
// const myobj = {
//     name:`${name}`,
//     position:`${position}`,
//     city: 'Kurungala',
// };

function Main({children, name, city, position}){
    // const {city} = myobj;
    return(
        <div>
            This is the main component

            <ul>
                <li>{name}</li>
                <li>{position}</li>
                <li>{city}</li>
                <li>windoUbuntuws</li>
                <li>Mac OS</li>
            </ul>
            {children}
        </div>
    );
}

export default Main;