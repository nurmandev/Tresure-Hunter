import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t uppercase">
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.treasure_chest}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            شركه treasure hunters هي شركه عالميه تم تأسيسها في عام 2017 في
            الولايات المتحدة الأمريكية وهي شركه متخصصه في تكنولوجيا التنقيب حيث
            تقوم بصناعة اجهزه متقدمة متخصصه في الكشف والتنقيب عن ثروات باطن
            الأرض ولديها العديد من براءات الاختراع.
          </p>

          <b className="text-gray-800">رؤيتنا</b>
          <p>
            أن نكون الشركة الرائدة عالميًا في تكنولوجيا الاستكشاف، ونشكل مستقبل
            التنقيب عن الكنوز والثروات الباطنية من خلال الابتكار المستمر،
            والاستدامة، والاعتماد على تقنيات موثوقة ومتطورة.
          </p>
          <b className="text-gray-800">رسالتنا</b>
          <p>
            تقديم حلول تقنية متقدمة تحدث ثورة في مجال التنقيب تحت الأرض، وتمكّن
            المستكشفين والباحثين والمهنيين حول العالم من اكتشاف الكنوز بدقة
            وأمان وابتكار.
          </p>
        </div>
      </div>

      <div className="text-2xl py-4 uppercase">
        <Title text1={"لماذا"} text2={"تختارنا؟"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>ضمان الجودة</b>
          <p className="text-gray-600">
            نلتزم بأعلى معايير الجودة في تصميم وتصنيع أجهزتنا، باستخدام أحدث
            التقنيات لضمان الأداء الفعّال والدقة العالية في كل عملية تنقيب.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>الراحة والسهولة</b>
          <p className="text-gray-600">
            تم تصميم أجهزتنا لتكون سهلة الاستخدام، خفيفة الوزن، ومناسبة لمختلف
            البيئات، ما يجعل تجربة التنقيب أكثر راحة وفعالية سواء للمبتدئين أو
            المحترفين.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>خدمة عملاء متميزة</b>
          <p className="text-gray-600">
            نضع رضا العملاء في صميم اهتمامنا، ونوفر دعمًا فنيًا واستشارات على
            مدار الساعة لمساعدتك في كل خطوة من رحلتك في عالم التنقيب.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
