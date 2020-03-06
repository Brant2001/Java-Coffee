import { useEquipment } from "./equipmentDataProvider.js";
import Equipment from "./Equipment.js";





const contentTarget = document.querySelector(".equipmentList")

const EquipmentList = () => {

    const equipmentObjectsArray = useEquipment();

    for (const equipmentObject of equipmentObjectsArray) {
        contentTarget.innerHTML += Equipment(equipmentObject)
    }
}


export default EquipmentList