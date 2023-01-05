

let widthVariable:number = 60 //To responsive screen
let smWidthVariable:number = 90 //To complete screen

//Para el botón de ingles-español desplegable pequeño que vale 2/3 del total
let widthVariable2_3:number = 2*widthVariable/3
let smWidthVariable2_3:number = 2*smWidthVariable/3

const NavbarStyles = {
    NavbarHeight: "h-20",
    MarginTopToFixedNavbar: "mt-20",
    PositionLinksContainerSm: "top-20",

    WidthButton:'w-[60px]',
    SmWidthButton: `sm:w-[99px]`,

    //To the little button bellow
    WidthButton2_3: `w-[40px]`,
    SmWidthButton2_3: `sm:w-[66px]`

    // //Change Language variables
    // WidthButton: `w-[${widthVariable}px]`,
    // SmWidthButton: `sm:w-[${smWidthVariable}px]`,

    // //To the little button bellow
    // WidthButton2_3: `w-[${widthVariable2_3}px]`,
    // SmWidthButton2_3: `sm:w-[${smWidthVariable2_3}px]`
};

export { NavbarStyles };