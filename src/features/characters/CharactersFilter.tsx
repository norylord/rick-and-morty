'use client'

import React, {useRef, useState} from 'react';
import {InputGroup} from "@heroui/react";
import {Magnifier} from "@gravity-ui/icons";
import {useQueryParams} from "@/shared/lib";
import {debounce} from "@/shared/lib";

export const CharactersFilter = () => {

	const {params, setParams} = useQueryParams()
	const [name, setName] = useState(params.get('name') || '')

	const debounceNameInput = useRef(debounce((name: string) => setParams({name}), 300))

	const handleInputName = (name: string) => {
		setName(name)
		debounceNameInput.current(name)
	}

	return (
		<div className={'px-15 py-10 w-full flex'}>
			<InputGroup className={'w-full'}>
				<InputGroup.Prefix>
					<Magnifier className="size-4 text-muted"/>
				</InputGroup.Prefix>
				<InputGroup.Input className="w-full" placeholder="Поиск"
				                  value={name}
				                  onChange={event => handleInputName(event.target.value)}/>
			</InputGroup>
		</div>
	);
};

export default CharactersFilter;
