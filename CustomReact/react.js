function customRender(reactElement,cont)
{
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.childern
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // cont.appendChild(domElement);

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.childern
    for (const prop in reactElement.props) {
        if(prop== 'childern')
        {
            continue;
        }

        domElement.setAttribute(prop,reactElement.props[prop])
        
    }

    cont.appendChild(domElement);
}


const reactElement={
    type:"a",
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    childern:'click me to visit google'
}

const root=document.getElementById("root");

customRender(reactElement,root)