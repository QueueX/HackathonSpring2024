package com.example.authenticationservice.repository

import com.example.authenticationservice.entity.MembersEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface MemberRepository: JpaRepository<MembersEntity, UUID> {
}