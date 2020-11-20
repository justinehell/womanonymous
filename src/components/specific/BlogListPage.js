import React, { useState } from "react";
import "./blogList.css";
import FilteredBlog from "./FilteredBlog";

const data = [
  {
    title: "Temperature regulation",
    content:
      "Core body temperature changes across the ovulatory menstrual cycle, such that it is 0.3°C to 0.7°C higher in the post-ovulatory luteal phase when progesterone is high compared with the pre-ovulatory follicular phase. This temperature difference, which is most evident during sleep or immediately upon waking before any activity, is used by women as a retrospective indicator of an ovulatory cycle. Here, we review both historical and current literature aimed at characterizing changes in core body temperature across the menstrual cycle, considering the assessment of the circadian rhythm of core body temperature and thermoregulatory responses to challenges, including heat and cold exposure, exercise, and fever. We discuss potential mechanisms for the thermogenic effect of progesterone and the temperature-lowering effect of estrogen, and discuss effects on body temperature of exogenous formulations of these hormones as contained in oral contraceptives. We review new wearable temperature sensors aimed at tracking daily temperature changes of women across multiple menstrual cycles and highlight the need for future research on the validity and reliability of these devices. Despite the change in core body temperature across the menstrual cycle being so well identified, there remain gaps in our current understanding, particularly about the underlying mechanisms and microcircuitry involved in the temperature changes.",
    category: "advices",
  },
  {
    title: "Different types of period pain ",
    content:
      "Doctors divide period pain into two different types. The more common type is called primary dysmenorrhoea. This type of period pain typically starts from your first period, or in the years shortly after. With this type there is no underlying condition causing the period pain, says Dr Manwaring. The levels of pain can vary in primary dysmenorrhoea,she says. Typically, the pain has a regular pattern, beginning just before or as the period begins. It usually lasts for 1-3 days, but is most severe during the first or second day of the period.The pain is usually located in the lower abdomen (belly), but can also affect the lower back and thighs. It's often described as a constant ache or a cramping, gripping pain. Dr Manwaring says the period pain from primary dysmenorrhoea can usually be well controlled with over-the-counter painkillers (such as ibuprofen), the oral contraceptive pill, or through other means; for example, a hot water bottle or heat pack, physical activity or relaxation techniques. However, if these techniques are not managing the pain, seek advice from a health practitioner,says Dr Manwaring.",
    category: "pain",
  },
  {
    title: "Consider dietary supplements",
    content:
      "Cinnamon can help regulate insulin levels in your body, which may have an effect on other hormones and the menstrual cycle. In women with polycystic ovary syndrome (PCOS) who often have high insulin levels and irregular periods, cinnamon can cause a more regular menstrual cycle. Cinnamon supplements may also reduce pain in women who have painful menstrual periods. When cinnamon is used as a supplement, doses of 500 milligrams (mg) taken three times daily are commonly used. Turmeric root contains curcumin, which has been shown to have many beneficial health effects, including reducing inflammation and improving mood. Because of these effects, taking supplements containing curcumin can decrease symptoms of PMS. Turmeric may also have effects similar to the estrogen hormone. This means that it might also help regulate your menstrual cycle. Typical doses of curcumin are from 100 mg to 500 mg taken twice daily. Evening primrose oil contains gamma-linolenic acid (GLA), an omega-6 fatty acid that reduces inflammation. Evening primrose oil is used for many women’s health concerns, including hot flashes, breast pain, and symptoms of PMS. Some older studies show that evening primrose oil can decrease PMS symptoms, but other studies Doses of 3 to 6 grams daily of evening primrose oil are typically used. Castor oil is traditionally classified as an “emmenagogue,” which means that it’s thought to stimulate menstrual flow. Research in animals shows that castor oil may affect the menstrual cycle. It may also reduce inflammation, which could improve menstrual pain and cramping. To use castor oil, try preparing a castor oil pack. Soak a flannel cloth in castor oil, then squeeze off excess oil. Place the castor oil-soaked flannel cloth over your abdomen. Cover the flannel with plastic wrap. Place a heating pad or hot water bottle over the plastic-covered flannel. Relax and leave in place for 45 to 60 minutes. Try this once daily for three days, or longer if needed.",
    category: "pain",
  },
  {
    title: "How periode migraines are traditionally treated",
    content:
      "It would have been great if my doctor had told me that each woman’s body is different and that the levels of estrogen within birth control pills vary. So while a woman like me might find that being on the Pill made my menstrual migraines worse, another woman might find that they helped her migraines diminish. The lesson: listen to and know your own body and what works for you. A visit to a traditional western doctor about your menstrual migraines may result in one of these three approaches: An immediate dosage of triptan (a medication used to treat migraines) in combination with an anti-inflammatory like ibuprofen; or you can inject triptan with a needle or a needle-free syringe (which works faster than swallowing a pill but sounds horrifying); or you can use a nasal inhaler. This option, although less terrifying than injection and faster than a pill, is still not fast enough if you are nauseated and vomiting as a result of your migraine. A preventative approach of taking nonsteroidal anti-inflammatory drugs (NSAIDs), triptans, hormones, or magnesium a week before and after your period. Or a long-term treatment in which you are treated with hormones via the Pill or vaginal ring. Not a fan of prescription meds, injections, or any of the remedies mentioned and seeing that over-the-counter painkillers did nothing for the pain I was in,  I wondered about natural alternatives for bringing my hormones back into balance and, hopefully, getting rid of my migraines. After reading up on herbal remedies, I came across two herbs that were said to be particularly beneficial for women: Black Cohosh and Angelica. WHY BLACK COHOSH IS A GREAT NATURAL REMEDY FOR YOUR MENSTRUAL MIGRAINES Black cohosh has an ancient history of use among Native American women for menstruation and menopausal health issues. Western research has yet to conclude if black cohosh is effective in the use of treating symptoms of menopause such as hot flashes and vaginal dryness. But there is evidence that black cohosh is effective in treating issues related to Premenstrual Syndrome (PMS). It is the root of Black Cohosh that is used medicinally and it has been reported to regulate estrogen. At times, estrogen can overstimulate the tissue of the uterus, leading to pain and swelling. Black Cohosh counteracts this overstimulation by acting as an anti-inflammatory and an antispasmodic reducing pain, swelling, and cramping. Because of its ability to even out estrogen levels, it can mitigate the drop in estrogen that triggers period migraines. ",
    category: "pain",
  },
  {
    title: " What happens during the menstrual cycle?",
    content:
      " To understand the menstrual cycle, it helps to know about the reproductive organs inside a woman's body. These are: 2 ovaries – where eggs are stored, developed and released the womb (uterus) – where a fertilised egg implants and a baby develops the fallopian tubes – two thin tubes that connect the ovaries to the womb the cervix – the entrance to the womb from the vagina the vagina The menstrual cycle is controlled by hormones. In each cycle, rising levels of the hormone oestrogen cause the ovary to develop and release an egg (ovulation). The womb lining also starts to thicken. In the second half of the cycle, the hormone progesterone helps the womb to prepare for implantation of a developing embryo.The egg travels down the fallopian tubes. If pregnancy doesn't occur, the egg is reabsorbed into the body. Levels of oestrogen and progesterone fall, and the womb lining comes away and leaves the body as a period (the menstrual flow). The time from the release of an egg to the start of a period is around 10 to 16 days.",
    category: "info",
  },
  {
    title: "What happens during ovulation?",
    content:
      " Ovulation is the release of an egg from the ovaries. A woman is born with all her eggs. Once she starts her periods, 1 egg develops and is released during each menstrual cycle. After ovulation, the egg lives for 24 hours. Pregnancy happens if a man's sperm meet and fertilise the egg. Sperm can survive in the fallopian tubes for up to 7 days after sex. Occasionally, more than 1 egg is released during ovulation. If more than 1 egg is fertilised it can lead to a multiple pregnancy, such as twins.",
    category: "info",
  },
  {
    "title ": "When are you most fertile?",
    content:
      "Theoretically, there's only a short time when women can get pregnant, and that is the time around ovulation,says Belfield. It's difficult to pinpoint exactly when ovulation happens but in most women, it happens around 10 to 16 days before the next period.It's not accurate to say that all women are fertile on day 14 of the menstrual cycle,says Belfield. This might be true for women who have a regular, 28-day cycle, but it won't apply to women whose cycles are shorter or longer.",
    category: " info",
  },
  {
    title: "Massaging with essential oils",
    content:
      "Massage therapy for about 20 minutes can help reduce menstrual pain.  looked at 23 women with period pain caused by endometriosis. The researchers found that massages significantly reduced pain immediately and afterward. Massage therapy for menstruation involves pressing specific points while the therapist’s hands move around your abdomen, side, and back. Adding essential oils for an aromatherapy style of massage may have additional benefits. A 2012 study divided 48 women experiencing menstrual pain into two groups: One group received a cream containing essential oils, while the other received a cream containing a synthetic fragrance. The group who used essential oils experienced a significant reduction in amount and duration of pain. The researchers used a blend of lavender, clary sage, and marjoram oil in this study. You can buy a scented massage oil with similar ingredients or make your own. You should always dilute your essential oil with a carrier oil. Examples include vegetable or nut oils such as grapeseed or sweet almond oil. A safe concentration is one drop of essential oil per teaspoon of carrier oil.",
    category: "recipe",
  },
  {
    title: "Fenugreek Seeds",
    content:
      "Fenugreek seeds are known to facilitate weight loss, is good for your liver, kidneys and metabolism. Turns out, that they could be a good companion during your period too.  Dr. Ashutosh Gautam, Clinical Operations and Coordination Manager at Baidyanath says, “You can reduce period pain with the help of fenugreek seeds. All you need to do is soak it in water for 12 hours, and then drink up.",
    category: "recipe",
  },
  {
    title: " Heat",
    content:
      "Applying heat on the lower abdomen helps relax the contracting muscles in the uterus, says Dr. Manoj K. Ahuja, Fortis Hospital. A hot water bottle always does the trick for me, but you can use over-the-counter heating pads or patches for comfort as well. Dr. Ritika Samaddar, Max Super Speciality Hospital says, “Sipping on warm fluids or taking a hot shower also helps to relieve pain and make you feel more relaxed.",
    category: "recipe",
  },
  {
    title: "Ginger and Black Pepper Tea",
    content:
      "Dr. Malini Sharma, Ayurveda Expert says “Make herbal tea using dried ginger and black pepper. Add a little sugar for taste, but avoid milk. Ginger can effectively reduce period pain, as it plays a key role in lowering the levels of prostaglandins. As an added bonus, it also helps make irregular periods regular and fights fatigue associated with premenstrual syndrome.",
    category: "recipe",
  },
  {
    title: "Cumin Seeds",
    content:
      "You can make a herbal tea out of cumin seeds to reduce period pain, suggests Dr. Ashutosh Gautam, Baidyanath. Cumin has a relaxing effect, and its anti-spasmodic and anti-inflammatory properties are useful for for getting rid of menstrual cramps.",
    category: "recipe",
  },
  {
    title: " Chamomile Tea",
    content:
      "Listen to the latest songs, only on JioSaavn.com According to a study published in the Journal of Agriculture and Chemistry, Chamomile tea has pain-relieving properties. It helps relax the uterus and decrease the production of prostaglandins, thus reducing period pain. ",
    category: "recipe",
  }
];

const BlogListPage = () => {
  const [selectedTheme, setSelectedTheme] = useState();

  function handleOnClick(e) {
    setSelectedTheme(e.target.id);
  }

 return (
    <div>
      <div id="blog-list">
        <ul>
          <li className="circle" id="pain" onClick={handleOnClick}>
            Pain
          </li>
          <li className="circle" id="info" onClick={handleOnClick}>
            Info
          </li>
          <li className="circle" id="advices" onClick={handleOnClick}>
            Advices
          </li>
          <li className="circle" id="recipe" onClick={handleOnClick}>
            Recipe
          </li>
        </ul>
      </div>
      {data
        .filter((article) => selectedTheme === article.category)
        .map((article, i) => (
          <FilteredBlog key={i} articles={article} />
        ))}
    </div>
  );
};
export default BlogListPage;

