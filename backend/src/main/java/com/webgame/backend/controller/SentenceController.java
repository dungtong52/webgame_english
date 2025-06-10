package com.webgame.backend.controller;

import com.webgame.backend.dto.SentenceRequestDto;
import com.webgame.backend.dto.SentenceResponseDto;
import com.webgame.backend.service.SentenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sentences")
public class SentenceController {
	private final SentenceService sentenceService;

	@Autowired
	public SentenceController (SentenceService sentenceService) {
		this.sentenceService = sentenceService;
	}

	/**
	 * CREATE - POST ("/")
	 */
	@PostMapping
	public ResponseEntity<SentenceResponseDto> createSentence(@RequestBody SentenceRequestDto dto){
		SentenceResponseDto response = sentenceService.createSentence(dto);
		return ResponseEntity.ok(response);
	}

	/**
	 * READ - GET ("/")
	 */
	@GetMapping
	public List<SentenceResponseDto> gelAllSentences(){
		return sentenceService.gelAllSentences();
	}

	/**
	 * READ - GET sentence by id ("/{id}")
	 */
	@GetMapping("/{id}")
	public ResponseEntity<SentenceResponseDto> getSentenceById(@PathVariable Long id){
		SentenceResponseDto response = sentenceService.getSentenceById(id);
		if(response == null){
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(response);
	}

	/**
	 * UPDATE - PUT ("/edit/{id}")
	 */
	@PutMapping("/edit/{id}")
	public ResponseEntity<SentenceResponseDto> updateSentence(@PathVariable Long id, @RequestBody SentenceRequestDto dto){
		SentenceResponseDto response = sentenceService.updateSentence(id, dto);
		if(response == null){
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(response);
	}

	/**
	 * DELETE - DELETE ("/{id}")
	 */
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteSentence(@PathVariable Long id){
		if(sentenceService.deleteSentence(id)){
			return ResponseEntity.ok().<Void>build();
		}
		return ResponseEntity.notFound().build();
	}
}
