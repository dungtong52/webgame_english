package com.webgame.backend.dto;

import java.time.LocalDate;

public class SentenceRequestDto {
	private String contentVietnamese;

	private String contentEnglish;

	private Integer lesson;

	public SentenceRequestDto (String contentVietnamese, String contentEnglish, Integer lesson) {
		this.contentVietnamese = contentVietnamese;
		this.contentEnglish = contentEnglish;
		this.lesson = lesson;
	}

	public String getContentVietnamese () {
		return contentVietnamese;
	}

	public void setContentVietnamese (String contentVietnamese) {
		this.contentVietnamese = contentVietnamese;
	}

	public String getContentEnglish () {
		return contentEnglish;
	}

	public void setContentEnglish (String contentEnglish) {
		this.contentEnglish = contentEnglish;
	}

	public Integer getLesson () {
		return lesson;
	}

	public void setLesson (Integer dateLearn) {
		this.lesson = lesson;
	}
}
