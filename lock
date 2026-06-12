module StudySessionTimer exposing (main)

import Browser
import Html exposing (Html, button, div, h4, input, label, p, span, text)
import Html.Attributes exposing (class, disabled, min, type_, value)
import Html.Events exposing (onClick, onInput)
import String
import Time

-- Functional Program: Study Session Timer in Elm.
-- Elm follows a functional Model-View-Update architecture.

type Mode
    = Study
    | Break

type alias Model =
    { studyMinutes : Int
    , breakMinutes : Int
    , secondsLeft : Int
    , running : Bool
    , mode : Mode
    , completedSessions : Int
    }

init : () -> ( Model, Cmd Msg )
init _ =
    ( { studyMinutes = 25
      , breakMinutes = 5
      , secondsLeft = 25 * 60
      , running = False
      , mode = Study
      , completedSessions = 0
      }
    , Cmd.none
    )

type Msg
    = Start
    | Pause
    | Reset
    | Tick Time.Posix
    | ChangeStudy String
    | ChangeBreak String
    | SwitchMode

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Start ->
            ( { model | running = True }, Cmd.none )

        Pause ->
            ( { model | running = False }, Cmd.none )

        Reset ->
            ( resetCurrentMode model, Cmd.none )

        Tick _ ->
            if model.running && model.secondsLeft > 1 then
                ( { model | secondsLeft = model.secondsLeft - 1 }, Cmd.none )
            else if model.running then
                ( finishCurrentMode model, Cmd.none )
            else
                ( model, Cmd.none )

        ChangeStudy raw ->
            let
                minutes = String.toInt raw |> Maybe.withDefault model.studyMinutes |> max 1
                updated = { model | studyMinutes = minutes }
            in
            if model.mode == Study && not model.running then
                ( { updated | secondsLeft = minutes * 60 }, Cmd.none )
            else
                ( updated, Cmd.none )

        ChangeBreak raw ->
            let
                minutes = String.toInt raw |> Maybe.withDefault model.breakMinutes |> max 1
                updated = { model | breakMinutes = minutes }
            in
            if model.mode == Break && not model.running then
                ( { updated | secondsLeft = minutes * 60 }, Cmd.none )
            else
                ( updated, Cmd.none )

        SwitchMode ->
            ( switchMode model, Cmd.none )

resetCurrentMode : Model -> Model
resetCurrentMode model =
    { model
        | running = False
        , secondsLeft =
            case model.mode of
                Study -> model.studyMinutes * 60
                Break -> model.breakMinutes * 60
    }

switchMode : Model -> Model
switchMode model =
    case model.mode of
        Study ->
            { model | mode = Break, running = False, secondsLeft = model.breakMinutes * 60 }

        Break ->
            { model | mode = Study, running = False, secondsLeft = model.studyMinutes * 60 }

finishCurrentMode : Model -> Model
finishCurrentMode model =
    case model.mode of
        Study ->
            { model
                | mode = Break
                , running = False
                , secondsLeft = model.breakMinutes * 60
                , completedSessions = model.completedSessions + 1
            }

        Break ->
            { model | mode = Study, running = False, secondsLeft = model.studyMinutes * 60 }

subscriptions : Model -> Sub Msg
subscriptions model =
    if model.running then
        Time.every 1000 Tick
    else
        Sub.none

formatTime : Int -> String
formatTime totalSeconds =
    let
        minutes = totalSeconds // 60
        seconds = modBy 60 totalSeconds
        secondsText = if seconds < 10 then "0" ++ String.fromInt seconds else String.fromInt seconds
    in
    String.fromInt minutes ++ ":" ++ secondsText

modeText : Mode -> String
modeText mode =
    case mode of
        Study -> "Focus Session"
        Break -> "Break Time"

view : Model -> Html Msg
view model =
    div [ class "elm-timer-box" ]
        [ div [ class "timer-topline" ]
            [ span [ class "timer-mode" ] [ text (modeText model.mode) ]
            , span [ class "session-count" ] [ text ("Completed: " ++ String.fromInt model.completedSessions) ]
            ]
        , div [ class "timer-display" ] [ text (formatTime model.secondsLeft) ]
        , div [ class "timer-settings" ]
            [ label []
                [ text "Study minutes"
                , input [ type_ "number", min "1", value (String.fromInt model.studyMinutes), disabled model.running, onInput ChangeStudy ] []
                ]
            , label []
                [ text "Break minutes"
                , input [ type_ "number", min "1", value (String.fromInt model.breakMinutes), disabled model.running, onInput ChangeBreak ] []
                ]
            ]
        , div [ class "inline-actions" ]
            [ button [ class "btn card-btn", onClick Start, disabled model.running ] [ text "Start" ]
            , button [ class "btn secondary small-btn", onClick Pause, disabled (not model.running) ] [ text "Pause" ]
            , button [ class "btn secondary small-btn", onClick Reset ] [ text "Reset" ]
            , button [ class "btn secondary small-btn", onClick SwitchMode ] [ text "Switch Mode" ]
            ]
        , p [ class "timer-note" ] [ text "Finish a focus session to add it to your completed-session count." ]
        ]

main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
