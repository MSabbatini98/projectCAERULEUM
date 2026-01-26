import CoolTitle from "@/components/utils/coolTitle"
import "./basic-calculator.css"
export default function Calculator() {
  return (
    <main className="main_playground"  >
        <div className="main_content">

        <CoolTitle
            title="Calcolatrice classica"
            colorClass="blue_3"/>
        <p>Lorem This is a basic calculator built with React. It performs simple arithmetic operations such as addition, subtraction, multiplication, and division.</p>

      <BasicCalculator />
        </div>
    </main>
  )
}

function BasicCalculator() {


  return (
    <div className="b_calculator_container">
      <div className="calculator_grid"> 
        <div className="output">
          <div className="prev-oper"></div>
          <div className="curr-oper"></div>

        </div>
      <button className="span-two calc_operator">AC</button>
      <button className="calc_operator">DEL</button>
      <button className="calc_operator">+</button>
      <button className="calc_number">1</button>
      <button className="calc_number">2</button>
      <button className="calc_number">3</button>
      <button className="calc_operator">-</button>
      <button className="calc_number">4</button>
      <button className="calc_number">5</button>
      <button className="calc_number">6</button>
      <button className="calc_operator">*</button>
      <button className="calc_number">7</button>
      <button className="calc_number">8</button>
      <button className="calc_number">9</button>
      <button className="calc_operator">÷</button>
      <button className="calc_operator">.</button>
      <button className="calc_number">0</button>
      <button className="span-two calc_operator">=</button>


      </div>
    </div>

  )
}
