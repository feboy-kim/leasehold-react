import { RadioGroup } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/24/solid"
import { MinusCircleIcon } from "@heroicons/react/24/outline"
import PropTypes from 'prop-types'

function BoolRadios({ caption, title, trueLabel, falseLabel, selected, onSelect }) {
    return <RadioGroup value={selected} onChange={onSelect} title={title}>
        <div className="flex gap-1 flex-nowrap">
            <RadioGroup.Label className='p-1'>{caption}</RadioGroup.Label>
            <RadioGroup.Option value={true}>
                <div className='p-1 hover:text-bg-accent'>
                    <div className="inline align-middle">{trueLabel}</div>
                    <CheckIcon className="w-5 h-5 hidden ui-checked:inline" />
                    <MinusCircleIcon className="w-5 h-5 ui-checked:hidden inline" />
                </div>
            </RadioGroup.Option>
            <RadioGroup.Option value={false}>
                <div className='p-1 hover:text-bg-accent'>
                    <div className="inline align-middle">{falseLabel}</div>
                    <CheckIcon className="w-5 h-5 hidden ui-checked:inline" />
                    <MinusCircleIcon className="w-5 h-5 ui-checked:hidden inline" />
                </div>
            </RadioGroup.Option>
        </div>
    </RadioGroup>
}

BoolRadios.propTypes = {
    trueLabel: PropTypes.string.isRequired,
    falseLabel: PropTypes.string.isRequired,
    caption: PropTypes.string,
    selected: PropTypes.bool,
    onSelect: PropTypes.func
}

export default BoolRadios
