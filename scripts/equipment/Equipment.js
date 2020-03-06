const Equipment = (equipmentObject) => {
    return `
        <section>
            <article>
                <p>${equipmentObject.id}</p>
                <p>Serial Number: ${equipmentObject.serialNumber}</p>
                <p>Model: ${equipmentObject.model}</p>
                <p>Is Working: ${equipmentObject.isFunctional}</p>
                <p>Is Under Warranty: ${equipmentObject.isUnderWarranty}</p>
            </article>
        </section>
    `
}


export default Equipment