package com.example.homepageservice.service

import org.springframework.http.HttpStatus
import com.example.homepageservice.repository.TeamRepository
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class HomePageService(private val teamRepository: TeamRepository) {

    fun getTeamsCarousel(): Any {
        return try {
            ResponseEntity(teamRepository.findAll(), HttpStatus.OK )
        } catch (e: Exception) {
            ResponseEntity("Ошибка получения данных о команде!", HttpStatus.BAD_REQUEST)
        }
    }

}