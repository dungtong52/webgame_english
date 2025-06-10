package com.webgame.backend.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "sentences")
public class Sentence {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String contentVietnamese;

	@Column(nullable = false)
	private String contentEnglish;

	@Column(nullable = false)
	private Integer lesson;

	public Sentence () {
	}

	public Sentence (Long id, String contentVietnamese, String contentEnglish, Integer lesson) {
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

	public Integer getLesson () {
		return lesson;
	}

	public void setLesson (Integer dateLearn) {
		this.lesson = lesson;
	}
}
