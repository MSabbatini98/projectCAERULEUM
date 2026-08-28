'use client'

// /projects/programming/basic-calculator 
import CoolTitle from "@/components/utils/coolTitle"
import "./scientific-calculator.scss"

import { useReducer } from "react"
import { DigitButton, OperatorButton, ScienceButton } from "./CalcButtons"
import Link from "next/link"

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
} as const

type Operation = "+" | "-" | "*" | "÷"

type State = {
  currOpe: string | null
  prevOpe: string | null
  operation: Operation | null
  overwrite: boolean
}

type Action =
  | { type: typeof ACTIONS.ADD_DIGIT; payload: { digit: string } }
  | { type: typeof ACTIONS.CHOOSE_OPERATION; payload: { operation: Operation } }
  | { type: typeof ACTIONS.CLEAR }
  | { type: typeof ACTIONS.DELETE_DIGIT }
  | { type: typeof ACTIONS.EVALUATE }

const initialState: State = {
  currOpe: null,
  prevOpe: null,
  operation: null,
  overwrite: false,
}

export default function CalculatorScience() {
  return (
    <main >
      <div>

        <CoolTitle
            title="Calcolatrice scientifica"
            colorClass="blue_3"/>
        <p>Dopo aver seguito il tutorial (<a href="/projects/basic-calculator">calcolatrice classica</a>) ho sviluppato una calcolatrice scientifica con HTML, CSS e JavaScript.</p>
        <p style={{ marginTop: "0.75rem" }}>
          <Link href="/projects/scientificCalculator/source">
          Vedi i file sorgente
          </Link>
        </p>

        <ScientificCalculator />
      </div>
    </main>
  )
}

function evaluate({ currOpe, prevOpe, operation }: State): string {
  const prev = parseFloat(prevOpe ?? "")
  const curr = parseFloat(currOpe ?? "")
  if (isNaN(prev) || isNaN(curr)) return ""

  let computation: number

  switch (operation) {
    case "+":
      computation = prev + curr
      break
    case "-":
      computation = prev - curr
      break
    case "*":
      computation = prev * curr
      break
    case "÷":
      computation = prev / curr
      break
    default:
      return ""
  }

  return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})

function formatOperand(operand: string | null): string {
  if (operand == null) return ""
   
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(parseInt(integer))

  return `${INTEGER_FORMATTER.format(parseInt(integer))}.${decimal}`
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      if (state.currOpe && state.currOpe.length === 23) {
        alert("YOU HAVE WON") //TODO Easter egg 
        return state
      }
      if (state.overwrite) {
        return {
          ...state,
          currOpe: action.payload.digit,
          overwrite: false,
        }
      }

      if (action.payload.digit === "0" && state.currOpe === "0") return state
      if (action.payload.digit === "." && state.currOpe?.includes(".")) return state

      return {
        ...state,
        currOpe: `${state.currOpe ?? ""}${action.payload.digit}`,
      }

    case ACTIONS.CLEAR:
      return initialState

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currOpe == null && state.prevOpe == null) return state

      if (state.prevOpe == null) {
        return {
          ...state,
          operation: action.payload.operation,
          prevOpe: state.currOpe,
          currOpe: null,
        }
      }

      return {
        ...state,
        prevOpe: evaluate(state),
        operation: action.payload.operation,
        currOpe: null,
      }

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currOpe: null,
        }
      }

      if (state.currOpe == null) return state

      if (state.currOpe.length === 1) {
        return { ...state, currOpe: null }
      }

      return {
        ...state,
        currOpe: state.currOpe.slice(0, -1),
      }

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currOpe == null ||
        state.prevOpe == null
      )
        return state

      return {
        ...state,
        overwrite: true,
        prevOpe: null,
        operation: null,
        currOpe: evaluate(state),
      }

    default:
      return state
  }
}

function ScientificCalculator() {
  const [{ currOpe, prevOpe, operation }, dispatch] = useReducer(
    reducer,
    initialState
  )

  return (
    <div className="b_calculator_container">
      <div className="calculator_grid">
        <div className="output">
          <div className="prev-oper">
            {formatOperand(prevOpe)} {operation}
          </div>
          <div className="curr-oper">{formatOperand(currOpe)}</div>

        </div>

        {/* first row */}
      <button className="span-two calcOperator">Deg | Rad</button>
      <ScienceButton dispatch={dispatch} value="Fractions" mode="operator" />
      <ScienceButton dispatch={dispatch} value="pi" mode="mixed" />
      <ScienceButton dispatch={dispatch} value="√" mode="mixed" />
      <ScienceButton dispatch={dispatch} value="x²" mode="mixed" />
      <button className="calcOperator" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button className="calcOperator" onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>

        {/* second row */}
      <ScienceButton dispatch={dispatch} value="sin" mode="operator" />
      <ScienceButton dispatch={dispatch} value="x^" mode="operator" />
      <ScienceButton dispatch={dispatch} value="√" mode="operator" />
      <ScienceButton dispatch={dispatch} value="1" mode="number" />
      <ScienceButton dispatch={dispatch} value="2" mode="number" />
      <ScienceButton dispatch={dispatch} value="3" mode="number" />
      <ScienceButton dispatch={dispatch} value="(" mode="operator" />
      <ScienceButton dispatch={dispatch} value=")" mode="operator" />

      {/* third row */}
      <ScienceButton dispatch={dispatch} value="cos" mode="operator" />
      <ScienceButton dispatch={dispatch} value="fraction" mode="operator" />
      <ScienceButton dispatch={dispatch} value="log" mode="operator" />
      <ScienceButton dispatch={dispatch} value="4" mode="number" />
      <ScienceButton dispatch={dispatch} value="5" mode="number" />
      <ScienceButton dispatch={dispatch} value="6" mode="number" />
      <ScienceButton dispatch={dispatch} value="+" mode="operator" />
      <ScienceButton dispatch={dispatch} value="-" mode="operator" />



      {/* fourth row */}
      <ScienceButton dispatch={dispatch} value="tan" mode="operator" />
      <ScienceButton dispatch={dispatch} value="x!" mode="operator" />
      <ScienceButton dispatch={dispatch} value="ln" mode="operator" />
      <ScienceButton dispatch={dispatch} value="7" mode="number" />
      <ScienceButton dispatch={dispatch} value="8" mode="number" />
      <ScienceButton dispatch={dispatch} value="9" mode="number" />
      <ScienceButton dispatch={dispatch} value="*" mode="operator" />
      <ScienceButton dispatch={dispatch} value="÷" mode="operator" />

      {/* Fifth row */}
      <ScienceButton dispatch={dispatch} value="Ans" mode="operator" />
      <ScienceButton dispatch={dispatch} value="EXP" mode="operator" />
      <ScienceButton dispatch={dispatch} value="e" mode="operator" />
      <ScienceButton dispatch={dispatch} value="," mode="mixed" />
      <ScienceButton dispatch={dispatch} value="0" mode="number" />
      <ScienceButton dispatch={dispatch} value="+/-" mode="mixed" />
      <button className="span-two calcOperator" onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>


      </div>
    </div>

  )
}
