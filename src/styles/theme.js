import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
    styles:{
        global:{
            'html,body':{
                color: "white"
            },
             
        }
    },
    colors:{
        primary: "#222222",
        instagram: "linear(to-l, #7928CA, #FF0080)",
        second:"#1A1A1B"
    }, 
})