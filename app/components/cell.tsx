import { Dispatch,SetStateAction } from "react"

type Cellprops={
    id:number
    go :string
    setGo:Dispatch<SetStateAction<string>>
    cells:string[]
    setCells:Dispatch<SetStateAction<string[]>>
    cell :string
    winnigMassage:string

}

const Cell = ({go,setGo,id,cells,setCells,cell,winnigMassage}:Cellprops) => {

    const handleClick =(e:any) => {
        const taken= !!cells[id] //true

        console.log(cells)
        if (winnigMassage){
            return;
        }
        if ( !taken ){ //false
            if (go === "circle"){
                handleCellChange("circle")
                setGo("cross")
            }else if (go === "cross") {
                handleCellChange("cross")
                setGo("circle")
    
    
            }

        }

        
    }
    const handleCellChange = (cellToChange:string) =>{
        let copyCells=[...cells] 
        copyCells[id]=cellToChange
        setCells(copyCells)
    }

return( 
    <div className="square" onClick={handleClick}>
             <div className={cell}>{ cell ? (cell=== "circle" ? "O" :"X" ): ""}</div>
    </div>
)


}
export default Cell