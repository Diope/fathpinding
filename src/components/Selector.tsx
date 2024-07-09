import { ChangeEvent } from "react";

export function Selector({
	onChange,
	value,
	options,
	label,
	isDisabled,
}: {
	value: string | number;
	label: string;
	onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
	options: { value: string | number; name: string }[];
	isDisabled?: boolean;
}) {
	return (
		<div className="flex flex-col">
			<label
				htmlFor="grid-size"
				className="block text-sm font-medium text-gray-700"
			>
				{label}
			</label>
			<select
				disabled={isDisabled}
				className="cursor-pointer"
				value={value}
				id={label}
				onChange={onChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
}
