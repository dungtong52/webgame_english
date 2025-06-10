package com.webgame.backend.dto;

import java.time.LocalDate;

public class SentenceResponseDto {
	private Long id;
	private String contentVietnamese;
	private String contentEnglish;
	private Integer lesson;

	public SentenceResponseDto (Long id, String contentVietnamese, String contentEnglish, Integer lesson) {
		this.id = id;
		this.contentVietnamese = contentVietnamese;
		this.contentEnglish = contentEnglish;
		this.lesson = lesson;
	}

	public Long getId () {
		return id;
	}

	public void setId (Long id) {
		this.id = id;
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

	public Integer getLesson() {
		return lesson;
	}

	public void setLesson (Integer dateLearn) {
		this.lesson = lesson;
	}
}
