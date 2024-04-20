package com.example.authenticationservice.repository

import com.example.authenticationservice.entity.TeamEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface TeamRepository: JpaRepository<TeamEntity, UUID> {

}