package com.example.homepageservice.service

import com.example.homepageservice.repository.TeamRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class TeamCardService(private val teamRepository: TeamRepository) {

    fun getTeamCard(id: Int): Any {
        return try {
            ResponseEntity(teamRepository.findTeamEntityById(id), HttpStatus.OK)
        } catch (e: Exception) {
            ResponseEntity("Данная команда не найдена", HttpStatus.NOT_FOUND)
        }
    }

}