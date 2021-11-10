import React, {useState} from 'react'


const Task2 = () => {
    const [display, setDisplay] = useState('Скрыть')
    const style = { display: 'block'}
    return (
        <div>
            <button onClick={ () =>{ (display == 'Скрыть')? setDisplay('Показать') : setDisplay('Скрыть') } } >
                {display}
            </button>
            {
              (display == 'Скрыть') ?
                <p style= { style }>
                Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum. 
                </p> : ''
            }
        </div>
    )
}

export default Task2
