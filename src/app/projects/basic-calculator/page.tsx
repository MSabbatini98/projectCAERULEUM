'use client'
import CoolTitle from "@/components/utils/coolTitle"
import "./basic-calculator.css"

import { useReducer } from "react"
import { DigitButton, OperatorButton } from "../../components/CalcButtons"

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

export default function Calculator() {
  return (
    <main className="main_playground">
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

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
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

function BasicCalculator() {
  const [{ currOpe, prevOpe, operation }, dispatch] = useReducer(
    reducer,
    initialState
  )

  return (
    <div className="b_calculator_container">
      <div className="calculator_grid">
        <div className="output">
          <div className="prev-oper">
            {prevOpe} {operation}
          </div>
          <div className="curr-oper">{currOpe}</div>

        </div>
      <button className="span-two calc_operator" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button className="calc_operator" onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
      <OperatorButton dispatch={dispatch} operation="+"/>
      <DigitButton dispatch={dispatch} digit="1"/>
      <DigitButton dispatch={dispatch} digit="2"/>
      <DigitButton dispatch={dispatch} digit="3"/>
      <OperatorButton dispatch={dispatch} operation="-"/>
      <DigitButton dispatch={dispatch} digit="4"/>
      <DigitButton dispatch={dispatch} digit="5"/>
      <DigitButton dispatch={dispatch} digit="6"/>
      <OperatorButton dispatch={dispatch} operation="*"/>
      <DigitButton dispatch={dispatch} digit="7"/>
      <DigitButton dispatch={dispatch} digit="8"/>
      <DigitButton dispatch={dispatch} digit="9"/>
      <OperatorButton dispatch={dispatch} operation="÷"/>
      <DigitButton dispatch={dispatch} digit="."/>
      <DigitButton dispatch={dispatch} digit="0"/>
      <button className="span-two calc_operator" onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>


      </div>
    </div>

  )
}
