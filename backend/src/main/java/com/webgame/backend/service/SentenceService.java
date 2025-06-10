package com.webgame.backend.service;

import com.webgame.backend.dto.SentenceRequestDto;
import com.webgame.backend.dto.SentenceResponseDto;
import com.webgame.backend.entity.Sentence;
import com.webgame.backend.mapper.SentenceMapper;
import com.webgame.backend.repository.SentenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SentenceService {

	private final SentenceRepository sentenceRepository;

	@Autowired
	public SentenceService (SentenceRepository sentencesRepository) {
		this.sentenceRepository = sentencesRepository;
	}

	// CREATE
	public SentenceResponseDto createSentence(SentenceRequestDto dto){
		Sentence request = SentenceMapper.toEntity(dto);
		Sentence savedSentence = sentenceRepository.save(request);
		return SentenceMapper.toResponseDto(savedSentence);
	}

	// GET all sentences
	public List<SentenceResponseDto> gelAllSentences (){
		return sentenceRepository.findAll().stream()
				.map(s -> SentenceMapper.toResponseDto(s))
				.collect(Collectors.toList());
	}

	// GET sentence by id
	public SentenceResponseDto getSentenceById(Long id){
		Optional<Sentence> optionalSentence = sentenceRepository.findById(id);
		return optionalSentence.map(SentenceMapper::toResponseDto).orElse(null);
	}

	// UPDATE
	public SentenceResponseDto updateSentence(Long id, SentenceRequestDto dto){
		Optional<Sentence> optionalSentences = sentenceRepository.findById(id);
		if(optionalSentences.isPresent()){
			Sentence updatingSentence = optionalSentences.get();

			updatingSentence.setContentVietnamese(dto.getContentVietnamese());
			updatingSentence.setContentEnglish(dto.getContentEnglish());
			updatingSentence.setLesson(dto.getLesson());

			Sentence savedSentences = sentenceRepository.save(updatingSentence);
			return SentenceMapper.toResponseDto(savedSentences);
		}
		return null;
	}

	// DELETE
	public boolean deleteSentence(Long id){
		if(sentenceRepository.existsById(id)){
			sentenceRepository.deleteById(id);
			return true;
		}
		return false;
	}
}
