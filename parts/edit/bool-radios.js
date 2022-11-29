import { RadioGroup } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/24/solid"
import { MinusCircleIcon } from "@heroicons/react/24/outline"
import PropTypes from 'prop-types'

function BoolRadios({ trueLabel, falseLabel, selected, onSelect }) {
    return <RadioGroup value={selected} onChange={onSelect}>
        <RadioGroup.Label className='sr-only'>Radio Choice</RadioGroup.Label>
        <div className="flex gap-2">
            <RadioGroup.Option value={true}>
                <div className='px-2 py-1 hover:text-bg-accent'>
                    <div className="inline align-middle">{trueLabel}</div>
                    <CheckIcon className="w-5 h-5 hidden ui-checked:inline" />
                    <MinusCircleIcon className="w-5 h-5 ui-checked:hidden inline" />
                </div>
            </RadioGroup.Option>
            <RadioGroup.Option value={false}>
                <div className='px-2 py-1 hover:text-bg-accent'>
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
    selected: PropTypes.bool,
    onSelect: PropTypes.func
}

export default BoolRadios
