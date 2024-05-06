imgArray = new Array(12);
imgArray[0] = new Image;
imgArray[0].src = "Alduin_over_Helgen.png";
imgArray[1] = new Image;
imgArray[1].src = "DurnehviirSC.png"
imgArray[2] = new Image;
imgArray[2].src = "Krosulhah.png"
imgArray[3] = new Image;
imgArray[3].src = "Mirmulnir.png"
imgArray[4] = new Image;
imgArray[4].src = "Naaslaarum.png";
imgArray[5] = new Image;
imgArray[5].src = "Nahagliiv.png"
imgArray[6] = new Image;
imgArray[6].src = "Sahloknir.png"
imgArray[7] = new Image;
imgArray[7].src = "Sahrotaar.jpg"
imgArray[8] = new Image;
imgArray[8].src = "Viinturuth.png";
imgArray[9] = new Image;
imgArray[9].src = "Voslaarum.png"
imgArray[10] = new Image;
imgArray[10].src = "Vuljotnaak2.png"
imgArray[11] = new Image;
imgArray[11].src = "Vulthuryol.png"
index = 0;

img2Array = new Array(8);
img2Array[0] = new Image;
img2Array[0].src = "DurnehviirSC2.png";
img2Array[1] = new Image;
img2Array[1].src = "Krosulhah2.png";
img2Array[2] = new Image;
img2Array[2].src = "Kruziikrel.png";
img2Array[3] = new Image;
img2Array[3].src = "Odahviing.png";
img2Array[4] = new Image;
img2Array[4].src = "Paarthurnax_TotW.png";
img2Array[5] = new Image;
img2Array[5].src = "Relonikiv.png";
img2Array[6] = new Image;
img2Array[6].src = "Sahrotaar2.jpg";
img2Array[7] = new Image;
img2Array[7].src = "Vulthuryol2.png";
index = 0;

img3Array = new Array(9);
img3Array[0] = new Image;
img3Array[0].src = "Brown_Dragon_1.png";
img3Array[1] = new Image;
img3Array[1].src = "Blood_Dragon.png";
img3Array[2] = new Image;
img3Array[2].src = "Frost_Dragon.png";
img3Array[3] = new Image;
img3Array[3].src = "Elder_Dragon.png";
img3Array[4] = new Image;
img3Array[4].src = "Ancient_Dragon.png";
img3Array[5] = new Image;
img3Array[5].src = "Revered_Dragon.png";
img3Array[6] = new Image;
img3Array[6].src = "Legendary_Dragon.png";
img3Array[7] = new Image;
img3Array[7].src = "Serpentine_Dragon.png";
img3Array[8] = new Image;
img3Array[8].src = "SkeletalDragonFullBody.jpg";
index = 0;

function cycle()
{
    document.banner1.src = imgArray[index].src;
    document.banner2.src = img2Array[index].src;
    document.banner3.src = img3Array[index].src;
    
    index++;
   
    if (index == 9)
    {
        index = 0;
    }
    if (index == 12)
    {
        index = 0;
    }
    if (index == 8)
    {
        index = 0;
    }
    setTimeout("cycle()", 1000);
    return;
}
