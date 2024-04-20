package com.example.homepageservice.repository

import com.example.homepageservice.entity.TeamEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface TeamRepository : JpaRepository<TeamEntity, Int> {
    fun findTeamEntityById(id: Int) : TeamEntity
}