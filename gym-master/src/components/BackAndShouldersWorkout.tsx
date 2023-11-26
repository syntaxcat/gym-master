// import classes from "../components/BackAndShoulders.module.css"
import WeightInput from "./WeightInput"

const BackAndShouldersWorkout = () => {
  return (
    <ul>
      <li>
        גרוויטרון באחיזה צמודה <WeightInput />
      </li>
      <li>
        משיכה מפולי עליון לחזה באחיזה רחבה <WeightInput />
      </li>
      <li>
        משיכה מפולי עליון לבטן בעמידה על הברך אחת עם חבל רצועות <WeightInput />
      </li>
      <li>
        חתירה בישיבה מפולי תחתון לבטן <WeightInput />
      </li>
      <li>
        פולאובר בעמידה מפועלי עליון עם מוט <WeightInput />
      </li>
      <li>
        לחיצת כתפיים עם משקולות יד <WeightInput />
      </li>
      <li>
        חתירה בעמידה עם מוט W לחזה עם מרפקים למעלה (אחיזה הכי רחבה שיש){" "}
        <WeightInput />
      </li>
      <li>
        הרחקת זרועות בעמידה עם משקולות יד או במכונה ליד היפטראסט <WeightInput />
      </li>
      <li>
        סופרסט: כפיפית כתפיים- הרמת משקולות לפנים ידיים כמעט ישרות + הרחקה
        אופקית לכתף אחורית עם משקולות בישיבה חזה על ברכיים <WeightInput />
      </li>
    </ul>
  )
}

export default BackAndShouldersWorkout
