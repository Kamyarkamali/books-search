import image1 from "./assets/1.jpg"
import image2 from "./assets/2.jpg"
import image3 from "./assets/3.jpg"
import image4 from "./assets/4.jpg"
import image5 from "./assets/5.jpg"
import image6 from "./assets/6.jpg"
import image7 from "./assets/7.jpg"
import image8 from "./assets/8.jpg"
import image9 from "./assets/9.jpg"
import image10 from "./assets/10.jpg"
import image11 from "./assets/11.jpg"
import image12 from "./assets/12.jpg"
import image13 from "./assets/13.jpg"
import image15 from "./assets/14.jpg"
import image16 from "./assets/15.jpg"
import image17 from "./assets/16.jpg"

//inteface//type script
import { DATA } from "../types/interface/interface"


//enums in folder type//enums
import { DATAS } from "../types/enums/enum"

import kodak from "../components/images/kodak.png"
import tarikh from "../components/images/tarikh.png"
import falsafeh from "../components/images/falsafeh.png"
import woman from "../components/images/woman.png"
import angizeshi from "../components/images/angizeshi.png"
import roman from "../components/images/roman.png"
import romannojavan from "../components/images/romannojavan.png"
import bartarin from "../components/images/bartarin.png"

const books:DATA =[
    {id:1,name:"جادو",auther:"راندان برن",motarjem:"سارا عزیزی",image:image1,price:73500,rate:3.9,count:120,category:DATAS.CATEGORY_BIG},
    {id:2,name:"کیمیا گر",auther:"پائولو کوئیلو",motarjem:"آرش حجازی",image:image2,price:88800,rate:5.5,count:140,category:DATAS.CATEGORY_BIG},
    {id:3,name:"بنویس تا اتفاق بیفتد",auther:"هنریت کلاوسر",motarjem:"فریده هداوند",image:image3,price:70000,rate:3.5,count:110,category:DATAS.CATEGORY_BIG},
    {id:4,name:"اول عاشق خودت باش",auther:"مارک رکلاو",motarjem:"فاطمه لطفی",image:image4,price:60000,rate:6.5,count:180,category:DATAS.CATEGORY_BIG},
    {id:5,name:"عادت های اتمی",auther:"جمیز کلیر",motarjem:"نگین عباسی",image:image5,price:110000,rate:7.2,count:130,category:DATAS.CATEGORY_ROMANS},
    {id:6,name:"تخت خوابت را مرتب کن",auther:" ویلیام اچ . مک ریون",motarjem:"نگین عباسی",image:image6,price:40000,rate:6.2,count:130,category:DATAS.CATEGORY_ROMANS},
    {id:7,name:"کتابخانه نیمه شب",auther:"مت هیگ",motarjem:"صدیقه اوشنی",image:image7,price:120000,rate:9.2,count:164,category:DATAS.CATEGORY_ELMI},
    {id:8,name:"باشگاه پنج صبحی ها",auther:"رابین اس شارما",motarjem:"مرجان شمیل شوشتری",image:image8,price:145000,rate:7.2,count:174,category:DATAS.CATEGORY_ELMI},
    {id:9,name:"چهار اثر از فلورانس",auther:"فلورانس اسکاول شین",motarjem:"فرشته مهری",image:image9,price:85000,rate:6.3,count:144,category:DATAS.CATEGORY_ELMI},
    {id:10,name:"اثر مرکب",auther:"دارن هاردی",motarjem:"معصومه تاجمیری",image:image10,price:95000,rate:8.7,count:164,category:DATAS.CATEGORY_ELMI},
    {id:11,name:"پسر رود",auther:"چارلز کینگزلی",motarjem:"	راضیه ابراهیمی",image:image11,price:15300,rate:3,count:64,category:DATAS.CATEGORY_CHILDREN},
    {id:12,name:"کتاب 110 قصه از هانس کریستین",auther:"هانس کریستین آندرسن",motarjem:"محمدرضا شمس",image:image12,price:637500,rate:3,count:184,category:DATAS.CATEGORY_CHILDREN},
    {id:13,name:" غول بزرگ مهربان",auther:"رولد دال",motarjem:"	گیتا گرکانی",image:image13,price:97750,rate:3,count:184,category:DATAS.CATEGORY_CHILDREN},
    {id:14,name:"تراژدی تنهایی",auther:"کریستوفر دو بلگ",motarjem:"هرنگ رجبی",image:image15,price:229500,rate:4,count:413,category:DATAS.CATEGORY_TARIKHI},
    {id:15,name:"تاریخ ایران",auther:" عباس اقبال آشتیانی",motarjem:"",image:image16,price:229500,rate:4,count:413,category:DATAS.CATEGORY_TARIKHI},
    {id:16,name:"صلحی که همه صلح ها را بر باد داد",auther:"دیوید فرامکین",motarjem:"حسن افشار",image:image17,price:427500,rate:5,count:310,category:DATAS.CATEGORY_TARIKHI},
    {id:17,name:"تاریخ مشروطه ایران",auther:" احمد کسروی",motarjem:"",image:image17,price:382500,rate:5,count:523,category:DATAS.CATEGORY_TARIKHI},
]


const hero=[
    {id:1,name:"کودکان",image:kodak},
    {id:2,name:"تاریخ",image:tarikh},
    {id:3,name:"فلسفه",image:falsafeh},
    {id:4,name:"زنان",image:woman},
    {id:5,name:"انگیزشی",image:angizeshi},
    {id:6,name:"رمان",image:roman},
    {id:7,name:"رمان نوجوانان",image:romannojavan},
    {id:8,name:"برترین ها",image:bartarin},
]

export {books,hero}