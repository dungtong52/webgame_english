package com.webgame.backend.mapper;

import com.webgame.backend.dto.SentenceRequestDto;
import com.webgame.backend.dto.SentenceResponseDto;
import com.webgame.backend.entity.Sentence;

public class SentenceMapper {
	// Truyen Entity ve Dto
	public static SentenceResponseDto toResponseDto(Sentence sentence){
		return new SentenceResponseDto(
				sentence.getId(),
				sentence.getContentVietnamese(),
				sentence.getContentEnglish(),
				sentence.getLesson()
		);
	}

	// Truyen Dto len Entity
	public static Sentence toEntity(SentenceRequestDto dto){
		return new Sentence(
				null,
				dto.getContentVietnamese(),
				dto.getContentEnglish(),
				dto.getLesson()
		);
	}
}
